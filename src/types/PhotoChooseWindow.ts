export default interface PhotoChooseWindow {
    renderChoosePhotoHandler: () => void;
    renderChoosePhoto: boolean;
    preview?: any;
    setPreview?: React.SetStateAction<any> | undefined;
}