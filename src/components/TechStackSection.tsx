import { Badge } from "@/components/ui/badge";

const techs = [
  "Java 21 LTS",
  "Spring Boot 3.4.1",
  "Spring Security 6",
  "Angular 21",
  "Angular Material 21",
  "MSSQL 2022",
  "Flyway",
  "Docker Compose",
  "Nginx",
  "JJWT (HS512)",
];

export function TechStackSection() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {techs.map((t) => (
          <Badge key={t} variant="tech" className="px-4 py-2 text-sm">
            {t}
          </Badge>
        ))}
      </div>
    </section>
  );
}
