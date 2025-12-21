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
    { value: 'Liga de la Justicia', label: 'Liga de la Justicia' },
    { value: 'Vengadores', label: 'Vengadores' },
    { value: 'X-Men', label: 'X-Men' },
    { value: 'Batfamilia', label: 'Batfamilia' },
    { value: 'Jóvenes Titanes', label: 'Jóvenes Titanes' },
    { value: 'Solo', label: 'Solo' },
  ],

  Categories: [
    { value: 'Hero', label: 'Hero' },
    { value: 'Villain', label: 'Villain' },
  ],

  Universe: [
    { value: 'DC', label: 'DC' },
    { value: 'Marvel', label: 'Marvel' },
  ],

  Status: [
    { value: 'Active', label: 'Active' },
    { value: 'Deceased', label: 'Deceased' },
  ],
};
