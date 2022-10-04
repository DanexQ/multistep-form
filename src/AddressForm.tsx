import { FormWrapper } from "./FormWrapper";

type DataFormProps = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = DataFormProps & {
  handleChange: (field: Partial<DataFormProps>) => void;
};

const AddressForm = ({
  street,
  city,
  state,
  zip,
  handleChange,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address">
      <label htmlFor="street">Street</label>
      <input
        autoFocus
        type="text"
        name="street"
        required
        value={street}
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        name="city"
        required
        value={city}
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        name="state"
        required
        value={state}
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
      <label htmlFor="zip">Zip</label>
      <input
        type="text"
        name="zip"
        required
        value={zip}
        onChange={(e) => handleChange({ [e.target.name]: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
