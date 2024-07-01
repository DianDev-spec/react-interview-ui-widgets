import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createWidget } from '../services/widgetService';
import { toast } from 'react-toastify';

const WidgetCreateForm: React.FC = () => {
  const navigate = useNavigate();
  const [widget, setWidget] = useState({
    name: '',
    description: '',
    price: 0
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setWidget(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createWidget(widget);
      toast.success('Widget created successfully!');
      setTimeout(() => navigate('/list'), 500); // Redirige después de mostrar el toast
    } catch (error) {
      console.error('Failed to create widget:', error);
      toast.error('Failed to create widget.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={widget.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={widget.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={widget.price}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Create Widget</button>
    </form>
  );
};

export default WidgetCreateForm;
