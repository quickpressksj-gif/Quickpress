import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'widgets/bottom_navbar.dart';
import 'providers/cart_provider.dart';

void main() {
  runApp(const QuickPressApp());
}

class QuickPressApp extends StatelessWidget {
  const QuickPressApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => CartProvider(),
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        home: const BottomNavBar(),
      ),
    );
  }
}
