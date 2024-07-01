import React, { useState } from 'react';
import { getWidgetByName } from '../services/widgetService';

const WidgetDetails: React.FC = () => {
  const [name, setName] = useState('');
  const [widget, setWidget] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await getWidgetByName(name);
    setWidget(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <button type="submit">Get Widget Details</button>
      </form>
      {widget && (
        <div>
          <h2>{widget.name}</h2>
          <p>{widget.description}</p>
          <p>${widget.price.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default WidgetDetails;
