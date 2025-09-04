import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CommunityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  members: number;
  gradient: string;
}

const CommunityCard = ({ title, description, icon: Icon, members, gradient }: CommunityCardProps) => {
  return (
    <Card className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-2 border-0 bg-white/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-sm text-muted-foreground">{members} members</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          Join Community
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;