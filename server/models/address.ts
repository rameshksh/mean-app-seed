import {ObjectID} from 'mongodb';
import {BaseEntity} from './baseEntity';

export class Address extends BaseEntity
{
    AddressLine1: string;
    AddressLine2: string;
    Street: string;
    City: string;
    Landmark: string;
    IsOfficeAddress: boolean;
    IsPermanetAddress: boolean;
    StateId: string;
    CounntryId: number; 
}