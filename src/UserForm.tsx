import { FormWrapper } from "./FormWrapper";

type DataFormProps = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = DataFormProps & {
  handleChange: (field: Partial<DataFormProps>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  handleChange,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="firstName">First Name</label>
      <input
        autoFocus
        type="text"
        name="firstName"
        required
        value={firstName}
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="LastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        required
        value={lastName}
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        name="age"
        required
        min="1"
        value={age}
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
