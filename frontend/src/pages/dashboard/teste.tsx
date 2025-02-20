import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Teste() {
    const [dados, setDados] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/teste')
            .then((response) => {
                setDados(response.data);
            })
            .catch((error) => {
                console.error('Erro ao chamar a API:', error);
            });
    }, []);

    return (
        <div className="text-white">
            <h1>Teste</h1>
            <ul>
                {dados.map((dado, index) => (
                    <li key={index}>{dado}</li>
                ))}
            </ul>
        </div>
    );
}
