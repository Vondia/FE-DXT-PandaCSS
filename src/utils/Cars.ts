import { ID } from 'appwrite';
import { appwriteDatabase } from './Appwrite';

export const getCars = async (): Promise<Car[]> => {
  const { documents } = await appwriteDatabase.listDocuments(
    process.env.APPWRITE_DATABASE_ID || '',
    process.env.APPWRITE_CARS_COLLECTION_ID || ''
  );
  const cars = documents as unknown as Car[];
  return cars;
};

export const deleteCar = async (id: string): Promise<string> => {
  await appwriteDatabase.deleteDocument(
    process.env.APPWRITE_DATABASE_ID || '',
    process.env.APPWRITE_CARS_COLLECTION_ID || '',
    id
  );
  return "Deleted succesfully"
}

export const createCar = async (car: Car): Promise<Car> => {
  console.log("here");
debugger;
  const createdCar = (await appwriteDatabase.createDocument(
    process.env.APPWRITE_DATABASE_ID || '',
    process.env.APPWRITE_CARS_COLLECTION_ID || '',
    ID.unique(),
    car
  )) as unknown as Car;
  return createdCar;
};

export const getCarById = async (id: string): Promise<Car> => {
  const car = (await appwriteDatabase.getDocument(
    process.env.APPWRITE_DATABASE_ID || '',
    process.env.APPWRITE_CARS_COLLECTION_ID || '',
    id
  )) as unknown as Car;
  if (!car) {
    throw new Error('Car not found');
  }
  return car;
};

export interface Car {
  $id?: string;
  carName: string;
  carPrice: string;
  fuel: 'gass' | 'electric';
  seats: number;
  imageUrl: string;
  gearType: 'Auto' | 'Manual';
}
