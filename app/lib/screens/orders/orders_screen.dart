import 'package:flutter/material.dart';

class OrdersScreen extends StatelessWidget {
  const OrdersScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text("No orders yet",
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500)),
    );
  }
}
