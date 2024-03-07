import React, { useEffect, useState } from 'react';

import { Company } from '../types';

import CompanyCard from './CompanyCard';

interface Props {
  searchQuery: string;
}

function CompanyList({ searchQuery }: Props) {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    void (async () => {
      const response = await fetch(`http://localhost:3001/companies?query=${searchQuery}`);
      setCompanies((await response.json()) as Company[]);
    })();
  }, [searchQuery]);

  return (
    <div className="CompanyList">
      {companies.map((company) => (
        <CompanyCard key={company.id} {...company} />
      ))}
    </div>
  );
}

export default CompanyList;
