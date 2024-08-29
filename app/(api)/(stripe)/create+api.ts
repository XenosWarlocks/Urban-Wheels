import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, amount } = body;

    if (!name || !email || !amount) {
        return new Response(JSON.stringify({error: "Missing required fields"}),{
            status: 400,
            // headers: { "Content-Type": "application/json" },
        });
    }
    let customer;
    const doesCustomerExist = await stripe.customers.list({email,});

    if (doesCustomerExist.data.length > 0) {
        customer = doesCustomerExist.data[0]
    } else {
        const newCustomer = await stripe.customers.create({
            name,
            email,
        });
        customer = newCustomer;
    }
}