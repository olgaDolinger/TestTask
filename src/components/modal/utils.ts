
import { Dispatch, SetStateAction } from 'react';
import * as yup from 'yup';
import { OptionType } from '../dropdown/DropDown';

export const handleErrors = (error: yup.ValidationError, setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>) => {
    const validationErrors: { [key: string]: string } = {};
    error.inner.forEach((error) => {
        if (error.path) {
            validationErrors[error.path] = error.message;
        }
    });
    setErrors(validationErrors);
}

export const hasErrors = (errors: { [key: string]: string }) => {
    return Object.keys(errors).length > 0;
}

    export const getOptions = (categoryList: OptionType[]) => {
        return categoryList.map((category) => ({ id: category.id, label: category.label }))
    }