"use client"
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ContatoPage() {

    const [name, setName] = useState("");

    return (
        <div>
            <Header />
            <h2 className="text-2xl font-bold mb-4">Contato</h2>
            <div className="flex justify-center">
                Olá, {nome}!
            </div>
            <form className="flex justify-center">
                <div ClassName="w-2xl">
                    <label htmlFor="name">Nome</label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        
                </div>
                <div>
                    <Button onClick={() => console.log(name)}>
                        Cadastrar
                    </Button>
                </div>
            </form>
        </div>
    )
}

