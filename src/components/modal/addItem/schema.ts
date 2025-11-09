import * as yup from 'yup';

const itemSchema = yup.object().shape({
    title: yup.string()
        .required('Title is required')
        .min(3, 'Title must be at least 3 characters')
        .max(100, 'Title must be at most 100 characters'),
});
export default itemSchema;
