import Input from '../Components/Input';
import Button from '../Components/Button';
import { VALIDATOR_REQUIRE } from '../utils/validators';
import './WorkshopForm.css';
import formsvg from '../Assests/form.svg';
import {useForm} from '../hooks/form-hook';
const WorkshopForm = () => {
  const [formstate, inputchangehandelr] = useForm(
    {
      name: {
        value: '',
        isValid: false,
      },
      nameorg: {
        value: '',
        isValid: false,
      },
      shortdesc:{
        value: '',
        isValid: false,
      },
      longdesc:{
        value: '',
        isValid: false,
      },
    },
    false
  );
  const submithandler = (e) => {
    e.preventDefault();
  };
  //   const [value, onChange] = useState(new Date());
  const onChangehandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className='container'>
      <div className='new__session'>
        <h2>Enter New Event</h2>
        <hr />
        <form onSubmit={submithandler} className='place-form' action=''>
          <Input
            id='name'
            type='text'
            label='Name of Event'
            element='input'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid name'
            onInput={inputchangehandelr}
          />
          <Input
            id='nameorg'
            type='text'
            label='Name of Organisation'
            element='input'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid name'
            onInput={inputchangehandelr}
          />
          {/* <DatePicker onChange={onChange} value={value} calendarClassName="data" /> */}
          <input type='date' onChange={onChangehandler} />
          <Input
            id='shortdesc'
            type='text'
            label='Short description'
            element='textarea'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid description'
            onInput={inputchangehandelr}
            rows={2}
          />
          <Input
            id='longdesc'
            type='text'
            label='Description in brief'
            element='textarea'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid description'
            onInput={inputchangehandelr}
          />

          <Button type='submit' disabled={!formstate.isValid}>
            Submit
          </Button>
        </form>
      </div>
      <img
        src={formsvg}
      />
    </div>
  );
};

export default WorkshopForm;
