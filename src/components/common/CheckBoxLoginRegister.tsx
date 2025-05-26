import { useState } from 'react';

interface CheckBoxProps {
    titleChecked: string;
}

export const Checkbox = ({ titleChecked}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label className='flex items-center text-[10px] gap-1'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {titleChecked}
      </label>
    </div>
  );
}
