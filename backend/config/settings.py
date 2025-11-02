from pathlib import Path, PosixPath, WindowsPath

project_path: Path | PosixPath | WindowsPath = Path(__file__).resolve().parent.parent