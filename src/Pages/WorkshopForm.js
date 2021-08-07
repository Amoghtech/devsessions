import Input from '../Components/Input';
import Button from '../Components/Button';
import { VALIDATOR_REQUIRE } from '../utils/validators';
import './WorkshopForm.css';
import formsvg from '../Assests/form.svg';
import { useForm } from '../hooks/form-hook';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { workshopsliceactions } from '../redux/workshops';
import { sendworkshopdata } from '../redux/workshop-actions';
let inital = false;
const WorkshopForm = () => {
    const dispatch=useDispatch()
  const [date, setdate] = useState('');
  //   const workshopdata=useSelector(state=>state.workshops);

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
    dispatch(
      workshopsliceactions.addworkshop({
        name: formstate.inputs.name,
        nameorg: formstate.inputs.nameorg,
        shortdesc: formstate.inputs.shortdesc,
        longdesc: formstate.inputs.longdesc,
        date: date,
      })
    );

    dispatch(
      sendworkshopdata({
        name: formstate.inputs.name,
        nameorg: formstate.inputs.nameorg,
        shortdesc: formstate.inputs.shortdesc,
        longdesc: formstate.inputs.longdesc,
        date: date,
      })
    );
  };
  //   const [value, onChange] = useState(new Date());
  const onChangehandler = (e) => {
    setdate(e.target.value);
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
      <img src={formsvg} />
    </div>
  );
};

export default WorkshopForm;
