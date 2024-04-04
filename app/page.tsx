import Person from "@/components/Person";

interface Item {
  name: string;
  address: string;
  phone: string;
  email: string;
  status: string;
}

// tipagem pode ser de outra forma

// abaixo temos exemplo de como tipar usando Typescript
const dataPerson: Array<Item> = [
  {
    name: "Yago",
    address: "Rua Maria 222",
    phone: "11-9999-9999",
    email: "mail@mail.com",
    status: "error",
  },

  {
    name: "Lucas",
    address: "Rua Muito Foda 222",
    phone: "11-8888-8888",
    email: "outromail@mail.com",
    status: "success",
  },

  {
    name: "João",
    address: "Rua do João",
    phone: "11-7777-7777",
    email: "joao@gmail.com",
    status: "error",
  },

  {
    name: "Luquinhas",
    address: "Rua do Luquinhas",
    phone: "11-4002-8922",
    email: "Luquinhas@gmail.com",
    status: "error",
  },

  {
    name: "Paulo",
    address: "Rua do Paulinho",
    phone: "11-2222-3333",
    email: "Paulinho@gmail.com",
    status: "success",
  },
];

export default function Home() {
  return (
    <main>
      {dataPerson.map((item, index) => {
        return (
          <Person
            key={index}
            status={item.status}
            name={item.name}
            address={item.address}
            phone={item.phone}
            email={item.email}
          />
        );
      })}
    </main>
  );
}
