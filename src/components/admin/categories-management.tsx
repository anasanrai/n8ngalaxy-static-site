
import { Category } from "@/types";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CategoriesManagementProps {
  categories: Category[];
}

export function CategoriesManagement({ categories }: CategoriesManagementProps) {
  return (
    <div className="glass rounded-lg p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Category Management</h2>
      <div className="flex gap-4 mb-4">
        <Input placeholder="New category name" />
        <Button>Add Category</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Templates</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell className="font-medium">{category.name}</TableCell>
              <TableCell>{category.slug}</TableCell>
              <TableCell>{/* In a real app, you'd count templates per category */}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
