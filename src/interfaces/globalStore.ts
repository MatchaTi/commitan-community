import { UserUpload } from './post';

export interface UserUploadStore {
  inputUserUpload: UserUpload;
  imageMsg: string;
  imagePreview: string;
  setImageMsg: (msg: string) => void;
  setHeightValue: (value: string) => void;
  setSyntax: (value: string) => void;
  heightValue: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  clearField: () => void;
  clearImage: () => void;
  clearCode: () => void;
}
