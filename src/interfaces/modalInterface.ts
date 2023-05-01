export default interface PropsModal {
  setModal: React.Dispatch<React.SetStateAction<string>>;
  modal: string;
  setTypeForm: React.Dispatch<React.SetStateAction<string>>;
  typeForm: string;
}
