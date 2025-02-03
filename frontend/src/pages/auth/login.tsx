import { Field, Label } from '../../components/fieldset'
import { Input } from '../../components/input'
import { Switch } from '../../components/switch'
import * as Headless from '@headlessui/react'
import { Button } from '../../components/button'
import { Text } from '../../components/text'

export default function Login() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col w-96 gap-8">
                <span className="text-2xl font-semibold text-white font-semibold">Login</span>

                <Field>
                    <Label>Usuário ou Email</Label>
                    <Input name="usuario" />
                </Field>
                <Field>
                    <Label>Senha</Label>
                    <Input name="senha" />
                </Field>
                <div className='flex flex-row justify-between'>
                    <Headless.Field className="flex items-center gap-4">
                        <Switch color="sky" name="allow_embedding" />
                        <Label>Lembrar-me</Label>
                    </Headless.Field>
                    <Text
                        className="cursor-pointer hover:text-white"
                    >
                        Esqueceu a senha?
                    </Text>
                </div>
                <Button color="zinc">Entrar</Button>
            </div>
        </div>
    );
}
