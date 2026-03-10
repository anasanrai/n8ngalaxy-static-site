
import { Template } from "@/types";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TemplatesReviewTableProps {
  templates: Template[];
}

export function TemplatesReviewTable({ templates }: TemplatesReviewTableProps) {
  return (
    <div className="glass rounded-lg p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Template Submissions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Seller</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Submitted At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {templates.map((template) => (
            <TableRow key={template.id}>
              <TableCell className="font-medium">{template.name}</TableCell>
              <TableCell>{template.seller_id}</TableCell> {/* In a real app, you'd fetch the seller's name */}
              <TableCell>
                <Badge variant={template.is_active ? "default" : "secondary"}>
                  {template.is_active ? "Approved" : "Pending"}
                </Badge>
              </TableCell>
              <TableCell>{new Date(template.created_at).toLocaleDateString()}</TableCell>
              <TableCell className="text-right space-x-2">
                <Link href={`/templates/${template.slug}`} target="_blank">
                  <Button variant="outline" size="sm">View</Button>
                </Link>
                <Button variant="default" size="sm">Approve</Button>
                <Button variant="destructive" size="sm">Reject</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
