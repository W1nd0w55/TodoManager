from django.db.models import AutoField, EmailField, CharField, BooleanField
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager
from django.utils.timezone import now

# Create your models here.
class TM_UserManager(UserManager):
    def CreateUser(self, email, password, **extra_fields):
        if not email:
            raise ValueError("No email.")

        if not password:
            raise ValueError("No password.")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self.CreateUser(email, password, **extra_fields)

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.CreateUser(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    id = AutoField(primary_key=True)
    email = EmailField(blank=False, null=False, unique=True)
    name = CharField(max_length=255, blank=True, null=True, default='Anonymous user')

    is_staff = BooleanField(default=False)
    is_superuser = BooleanField(default=False)

    objects = TM_UserManager()
    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        db_table = 'users'

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.email.split('@')[0]
