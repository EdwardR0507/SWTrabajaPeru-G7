/*Importamos las librerias principales*/
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FormError from './FormError';
/*Renderizado del componente FormError*/
test('renders content based on true condition', () => {
    const component = render(
        <FormError condition={true}
                    content="Test FormError" />
    )
    component.getByText("Test FormError")
})
