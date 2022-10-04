import { FormWrapper } from "./FormWrapper";

type DataFormProps = {
  email: string;
  password: string;
};

type AccountFormProps = DataFormProps & {
  handleChange: (field: Partial<DataFormProps>) => void;
};

const AccountForm = ({ email, password, handleChange }: AccountFormProps) => {
  return (
    <FormWrapper title="Account create">
      <label htmlFor="email">Email</label>
      <input
        autoFocus
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        required
        value={password}
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
