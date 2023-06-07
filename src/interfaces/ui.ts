export interface UiStore {
  showUploadModal: boolean;
  toggleShowUploadModal: (showUploadModal: boolean) => void;

  showLinkSourceCode: boolean;
  toggleSourceCode: (showLinkSourceCode: boolean) => void;

  showLinkLiveDemo: boolean;
  toggleLiveDemo: (showLinkLiveDemo: boolean) => void;
}
