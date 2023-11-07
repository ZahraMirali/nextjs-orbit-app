"use client";

import { useEffect, useState } from "react";
import { fetchData } from "./orbit";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData().then((data: any) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>JSON API Results:</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.attributes.title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
