import type { UserUploadStore } from '@/interfaces/userPost';
import { create } from 'zustand';

export const useUserUploadStore = create<UserUploadStore>((set) => ({
  inputUserUpload: {
    title: '',
    desc: '',
    category: '',
    linkSourceCode: '',
    linkLiveDemo: '',
    image: null,
  },
  imageMsg: '',
  heightValue: '',
  imagePreview: '',
  setImageMsg: (msg) => set(() => ({ imageMsg: msg })),
  setHeightValue: (value) => set(() => ({ heightValue: value })),
  onChangeHandler: (e) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      if (file) {
        if (file.size > 1048576) {
          set((state) => ({
            ...state,
            imageMsg: 'Ukuran file terlalu besar. Maksimum 1MB!',
            imagePreview: '',
            inputUserUpload: { ...state.inputUserUpload, image: null },
          }));
        } else {
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            set((state) => ({
              ...state,
              imageMsg: '',
              imagePreview: reader.result as string,
              inputUserUpload: { ...state.inputUserUpload, image: file },
            }));
          };
        }
      }
    }

    if (name === 'desc') {
      set((state) => ({
        ...state,
        inputUserUpload: { ...state.inputUserUpload, [name]: value },
        heightValue: value,
      }));
    } else {
      set((state) => ({
        ...state,
        inputUserUpload: { ...state.inputUserUpload, [name]: value },
      }));
    }
  },
  clearField: () =>
    set(() => ({
      inputUserUpload: {
        title: '',
        desc: '',
        category: '',
        linkSourceCode: '',
        linkLiveDemo: '',
        image: null,
      },
      imageMsg: '',
      imagePreview: '',
    })),
  clearImage: () =>
    set(() => ({
      imageMsg: '',
      imagePreview: '',
    })),
}));
