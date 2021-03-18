import { useState } from 'react';

export default function useForm(initial = {}) {
  // create state obj for inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { type, name, value } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      value[0] = e.target.files;
    }
    setInputs({ ...inputs, [name]: value }); // copy existing state
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }
  // return what we want to surface from this hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
