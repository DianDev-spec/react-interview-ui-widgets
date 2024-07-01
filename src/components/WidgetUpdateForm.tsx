import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWidgetByName, updateWidget, Widget } from '../services/widgetService';
import { toast } from 'react-toastify';

const WidgetUpdateForm: React.FC = () => {
  const navigate = useNavigate();
  const [widgetName, setWidgetName] = useState('');
  const [widget, setWidget] = useState<Widget | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidgetName(event.target.value);
  };

  const handleLoadWidget = async () => {
    setIsLoading(true);
    try {
      const fetchedWidget = await getWidgetByName(widgetName);
      setWidget(fetchedWidget);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch widget:', error);
      toast.error('Widget not found or failed to load.');
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setWidget((prev) => ({
      ...prev!,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (widget) {
      try {
        await updateWidget(widget.name, widget);
        toast.success('Widget updated successfully!');
        navigate('/list');
      } catch (error) {
        console.error('Failed to update widget:', error);
        toast.error('Failed to update widget.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={widgetName}
            onChange={handleNameChange}
          />
          <button type="button" onClick={handleLoadWidget} disabled={isLoading}>
            Load Widget
          </button>
        </label>
      </div>
      {widget && (
        <>
          <div>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={widget.description}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={widget.price}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit" disabled={isLoading}>Update Widget</button>
        </>
      )}
    </form>
  );
};

export default WidgetUpdateForm;
