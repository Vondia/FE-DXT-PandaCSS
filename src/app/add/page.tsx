"use client"

import { Car, createCar } from '@/utils/Cars';
import { useForm, Controller } from 'react-hook-form';
import { css } from '../../../styled-system/css';
import { useRouter } from 'next/navigation';

const CarForm = () => {
  const { control, handleSubmit } = useForm<Car>();
    const router = useRouter();
  const onSubmit = async (data: Car) => {
    // You can handle the submission of the form data here, e.g., send it to an API or perform any necessary actions.
    console.log('Form Data:', data);
    const response = await fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    console.log("DAARR", response)
    const result = await response.json();
    console.log("result", result);
    router.push(`/car/${result.$id}`);
  };

  return (
    <div>
      <h2>Create a Car</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={css({color: "white"})}>
        <div>
          <label>
            Car Name:
            <Controller
              name="carName"
              control={control}
              defaultValue=""
              render={({ field }) => <input type="text" {...field} />}
            />
          </label>
        </div>

        <div>
          <label>
            Car Price:
            <Controller
              name="carPrice"
              control={control}
              defaultValue=""
              render={({ field }) => <input type="text" {...field} />}
            />
          </label>
        </div>

        <div>
          <label>
            Fuel:
            <Controller
              name="fuel"
              control={control}
              defaultValue="gass"
              render={({ field }) => (
                <select {...field}>
                  <option value="gass">Gasoline</option>
                  <option value="electric">Electric</option>
                </select>
              )}
            />
          </label>
        </div>

        <div>
          <label>
            Number of Seats:
            <Controller
              name="seats"
              control={control}
              defaultValue={2}
              render={({ field }) => <input type="number" {...field} />}
            />
          </label>
        </div>

        <div>
          <label>
            Image URL:
            <Controller
              name="imageUrl"
              control={control}
              defaultValue=""
              render={({ field }) => <input type="text" {...field} />}
            />
          </label>
        </div>

        <div>
          <label>
            Gear Type:
            <Controller
              name="gearType"
              control={control}
              defaultValue="Auto"
              render={({ field }) => (
                <select {...field}>
                  <option value="Auto">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              )}
            />
          </label>
        </div>

        <button type="submit" className={css({color: "white"})}>Create Car</button>
      </form>
    </div>
  );
};

export default CarForm;