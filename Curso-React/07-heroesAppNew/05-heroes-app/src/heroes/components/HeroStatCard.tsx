import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import type { JSX } from 'react';

interface Props {
  title: string;
  icon: JSX.Element; // o un React.ReactNode
}

export const HeroStatCard = ({ title, icon }: Props) => {
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {/* <Heart className="h-4 w-4 text-muted-foreground" /> */}
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">3</div>
          <p className="text-xs text-muted-foreground">18.8% of total</p>
        </CardContent>
      </Card>
    </div>
  );
};
