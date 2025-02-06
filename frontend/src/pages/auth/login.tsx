import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Field, Label, ErrorMessage } from '../../components/fieldset'
import { Input } from '../../components/input'
import { Switch } from '../../components/switch'
import * as Headless from '@headlessui/react'
import { Button } from '../../components/button'
import { Text } from '../../components/text'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(new Map());
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); // nao deixa recarregar a pagina depois de clicar no formulario
        const newErrors = new Map();
        if (!username) newErrors.set('username', 'O usuário é obrigatório.');
        if (!password) newErrors.set('password', 'A senha é obrigatória.');
        setErrors(newErrors);
        if (newErrors.size > 0) return;
        if (username === 'admin' && password === 'admin') {
            navigate('/dashboard');
        } else {
            setErrors(new Map([['password', 'Usuário ou senha incorretos.']]));
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col w-lg gap-8 border-1 border-[#3F3F3F] bg-[#2D2D2D] px-16 py-14 rounded-lg">
                <span className="text-2xl font-semibold text-white">Login</span>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <Field>
                        <Label>Usuário ou Email</Label>
                        <Input
                            name="usuario"
                            placeholder='Digite seu usuário ou email'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            invalid={errors.has('username')}
                        />
                        {errors.has('username') && <ErrorMessage>{errors.get('username')}</ErrorMessage>}
                    </Field>
                    <Field>
                        <Label>Senha</Label>
                        <Input
                            name="senha"
                            placeholder='Digite sua senha'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            invalid={errors.has('password')}
                        />
                        {errors.has('password') && <ErrorMessage>{errors.get('password')}</ErrorMessage>}
                    </Field>
                    <div className='flex flex-row justify-between'>
                        <Headless.Field className="flex items-center gap-4">
                            <Switch color="sky" name="allow_embedding" />
                            <Label>Lembrar-me</Label>
                        </Headless.Field>
                        <Text className="cursor-pointer hover:text-white">
                            Esqueceu a senha?
                        </Text>
                    </div>
                    <Button color="zinc" type="submit">Entrar</Button>
                </form>
            </div>
        </div>
    );
}
