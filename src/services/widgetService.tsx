import axios from 'axios';

const API_URL = 'http://localhost:9000/api/widgets';

export interface Widget {
    name: string;
    description: string;
    price: number;
  }
  
  export const getWidgets = async (): Promise<Widget[]> => {
    const response = await axios.get<Widget[]>(API_URL);
    return response.data;
  };
  
  export const getWidgetByName = async (name: string): Promise<Widget> => {
    const response = await axios.get<Widget>(`${API_URL}/${name}`);
    return response.data;
  };
  
  
  export const createWidget = async (widget: Widget): Promise<Widget> => {
    const response = await axios.post<Widget>(API_URL, widget);
    return response.data;
  };
  
  export const updateWidget = async (name: string, widget: Widget): Promise<Widget> => {
    const response = await axios.put<Widget>(`${API_URL}/${name}`, widget);
    return response.data;
  };
  
  export const deleteWidget = async (name: string): Promise<void> => {
    await axios.delete(`${API_URL}/${name}`);
  };
