import Input from '../Components/Input';
import Button from '../Components/Button';
import { VALIDATOR_REQUIRE } from '../utils/validators';
import'./WorkshopForm.css';
import formsvg from '../Assests/hostimg.svg';
import { useForm } from '../hooks/form-hook';
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
      shortdesc: {
        value: '',
        isValid: false,
      },
      longdesc: {
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
    <div className='container p-2 '>
      <div class="row">
        <div className=' col new__session'>
          <h2>HOST A SESSION!</h2>
          <hr />
          <form onSubmit={submithandler} className='place-form' action=''>
            <Input
              id='name'
              type='text'
              label='Name of Event :-'
              element='input'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Please enter a valid name'
              onInput={inputchangehandelr}
            />
            <Input
              id='nameorg'
              type='text'
              label='Name of Organisation :-'
              element='input'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Please enter a valid name'
              onInput={inputchangehandelr}
            />
            {/* <DatePicker onChange={onChange} value={value} calendarClassName="data" /> */}
            <h6 class="font-weight-900 px-2 py-3 border rounded">Enter the date:-  <input type='date' onChange={onChangehandler} /></h6>
            <Input
              id='shortdesc'
              type='text'
              label='Short description :-'
              element='textarea'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Please enter a valid description'
              onInput={inputchangehandelr}
              rows={2}
            />
            <Input
              id='longdesc'
              type='text'
              label='Description in brief :-'
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
        <div class="col p-5 d-flex justify-content-center align-items-center">
          <img src={formsvg} style={{ height: "300px" }} />
        </div>
      </div>
    </div>
  );
};

export default WorkshopForm;
