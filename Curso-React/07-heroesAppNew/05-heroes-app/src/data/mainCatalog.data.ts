interface Cdata {
  value: string;
  label: string;
}

interface CatalogData {
  Teams: Cdata[];
  Categories: Cdata[];
  Universe: Cdata[];
  Status: Cdata[];
}

export const MainCatalogData: CatalogData = {
  Teams: [
    { value: 'liga-de-la-justicia', label: 'Liga de la Justicia' },
    { value: 'vengadores', label: 'Vengadores' },
    { value: 'x-men', label: 'X-Men' },
    { value: 'batfamilia', label: 'Batfamilia' },
    { value: 'jovenes-titanes', label: 'Jóvenes Titanes' },
    { value: 'solo', label: 'Solo' },
  ],

  Categories: [
    { value: 'hero', label: 'Hero' },
    { value: 'villain', label: 'Villain' },
  ],

  Universe: [
    { value: 'dc', label: 'DC' },
    { value: 'marvel', label: 'Marvel' },
  ],

  Status: [
    { value: 'active', label: 'Active' },
    { value: 'deceased', label: 'Deceased' },
  ],
};
