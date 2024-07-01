import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteWidget } from '../services/widgetService';
import { toast } from 'react-toastify';

const WidgetDeleteForm: React.FC = () => {
  const [widgetName, setWidgetName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidgetName(event.target.value);
  };

  const handleDelete = async () => {
    if (widgetName) {
      try {
        await deleteWidget(widgetName);
        toast.success('Widget successfully deleted!');
        navigate('/list'); // Redirige al usuario después de la operación
      } catch (error) {
        console.error('Failed to delete widget:', error);
        toast.error('Failed to delete widget.');
      }
    } else {
      toast.error('Please enter a widget name.');
    }
  };

  return (
    <div>
      <h1>Delete Widget</h1>
      <input
        type="text"
        placeholder="Enter widget name"
        value={widgetName}
        onChange={handleNameChange}
      />
      <button onClick={handleDelete}>Delete Widget</button>
    </div>
  );
};

export default WidgetDeleteForm;
