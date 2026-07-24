import { NextResponse } from 'next/server';

export async function GET() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Johnny Rodriguez Roluba - Distri Roluba
ORG:Distri Roluba
ROLE:Distribuidor de Queso y Lacteos
TEL;TYPE=WORK,VOICE:+593000000000
EMAIL;TYPE=WORK:contacto@distriroluba.com
ADR;TYPE=WORK:;;Ecuador;;;ECUADOR
URL;TYPE=WORK:https://rolubo.vercel.app
NOTE:Distribuidor de queso fresco y madurado al por mayor y en pilas. Venta a restaurantes, supermercados y comercios.
END:VCARD`;

  return new NextResponse(vcard, {
    headers: {
      'Content-Type': 'text/vcard;charset=utf-8',
      'Content-Disposition': 'attachment; filename="distri-roluba.vcf"',
    },
  });
}
