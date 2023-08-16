import type { UserUploadStore } from '@/interfaces/globalStore';
import { create } from 'zustand';

export const useUserUploadStore = create<UserUploadStore>((set) => ({
  inputUserUpload: {
    title: '',
    desc: '',
    category: '',
    linkSourceCode: '',
    linkLiveDemo: '',
    image: null,
    pathFile: '',
    syntax: '',
  },
  imageMsg: '',
  heightValue: '',
  imagePreview: '',
  setImageMsg: (msg) => set(() => ({ imageMsg: msg })),
  setHeightValue: (value) => set(() => ({ heightValue: value })),
  setSyntax: (value) =>
    set((state) => ({
      inputUserUpload: {
        ...state.inputUserUpload,
        syntax: value,
      },
    })),
  onChangeHandler: (e) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      if (file) {
        const validExtensions = ['jpg', 'png', 'jpeg'];
        const fileType = validExtensions.includes(file.name.split('.')[1]);

        if (fileType) {
          if (file.size > 1048576) {
            set((state) => ({
              imageMsg: 'Ukuran file terlalu besar. Maksimum 1MB!',
              imagePreview: '',
              inputUserUpload: { ...state.inputUserUpload, image: null },
            }));
          } else {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              set((state) => ({
                imageMsg: '',
                imagePreview: reader.result as string,
                inputUserUpload: { ...state.inputUserUpload, image: file },
              }));
            };
          }
        } else {
          set((state) => ({
            imageMsg: 'Ekstensi File harus jpg, png, jpeg',
            imagePreview: '',
            inputUserUpload: { ...state.inputUserUpload, image: null },
          }));
        }
      }
    }

    if (name === 'desc') {
      set((state) => ({
        inputUserUpload: { ...state.inputUserUpload, [name]: value },
        heightValue: value,
      }));
    } else {
      set((state) => ({
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
        pathFile: '',
        syntax: '',
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
