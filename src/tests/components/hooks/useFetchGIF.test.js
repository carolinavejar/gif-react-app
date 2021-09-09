import { useFetchGIF } from '../../../components/hooks/useFetchGIF';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en hook', () =>{
    test('debe retornar el estado inicial ', async () => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGIF('Rihanna'));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe retornar un array de imgs y loading en false ', async() => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGIF('Rihanna'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
}) 