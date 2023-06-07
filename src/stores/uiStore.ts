import { create } from 'zustand';
import type { UiStore } from '@/interfaces/ui';

export const useUiStore = create<UiStore>()((set) => ({
  showUploadModal: false,
  toggleShowUploadModal: (showUploadModal) => set(() => ({ showUploadModal })),

  showLinkSourceCode: false,
  toggleSourceCode: (showLinkSourceCode) => set(() => ({ showLinkSourceCode })),

  showLinkLiveDemo: false,
  toggleLiveDemo: (showLinkLiveDemo) => set(() => ({ showLinkLiveDemo })),
}));
