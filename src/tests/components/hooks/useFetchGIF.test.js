import { useFetchGIF } from '../../../components/hooks/useFetchGIF';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en hook', () =>{
    test('debe retornar el estado inicial ', () => {
        const { result } = renderHook(()=> useFetchGIF('Rihanna'));
        const { data, loading } = result.current;
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    
}) 