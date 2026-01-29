import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/cart_provider.dart';

class CategoryScreen extends StatelessWidget {
  final String category;
  const CategoryScreen({super.key, required this.category});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(category),
        backgroundColor: Colors.yellow,
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          productTile(context, "Shirt Ironing", 10),
          productTile(context, "Pant Ironing", 12),
          productTile(context, "T-Shirt Ironing", 8),
        ],
      ),
    );
  }

  Widget productTile(BuildContext context, String name, int price) {
    return Card(
      child: ListTile(
        leading: const Icon(Icons.checkroom, color: Colors.orange),
        title: Text(name),
        subtitle: Text("₹$price / piece"),
        trailing: ElevatedButton(
          style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
          onPressed: () {
            Provider.of<CartProvider>(context, listen: false)
                .addItem(name, name, price);
          },
          child: const Text("ADD"),
        ),
      ),
    );
  }
}
