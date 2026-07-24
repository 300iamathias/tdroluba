import { NextResponse } from 'next/server';
import { business } from '@/data/business';

export async function GET() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${business.ownerName} - ${business.name}
ORG:${business.name}
ROLE:${business.tagline}
TEL;TYPE=WORK,VOICE:+${business.whatsapp}
EMAIL;TYPE=WORK:${business.email}
ADR;TYPE=WORK:;;${business.address};;${business.city};ECUADOR
URL;TYPE=WORK:${business.websiteUrl}
NOTE:${business.fullTagline}. ${business.hours}.
END:VCARD`;

  return new NextResponse(vcard, {
    headers: {
      'Content-Type': 'text/vcard;charset=utf-8',
      'Content-Disposition': 'attachment; filename="distri-roluba.vcf"',
    },
  });
}
