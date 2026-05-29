const recipientEmail = "gabrielotodisoa@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const message = payload.message?.trim() ?? "";

    if (!name || !email || !message) {
      return Response.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Veuillez renseigner une adresse email valide." },
        { status: 400 },
      );
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("_subject", `Nouveau message portfolio - ${name}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    const response = await fetch(
      `https://formsubmit.co/ajax/${recipientEmail}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      },
    );

    if (!response.ok) {
      return Response.json(
        { error: "Le message n'a pas pu être envoyé. Réessayez plus tard." },
        { status: 502 },
      );
    }

    return Response.json({
      success: true,
      message: "Message envoyé avec succès.",
    });
  } catch {
    return Response.json(
      { error: "Une erreur est survenue pendant l'envoi du message." },
      { status: 500 },
    );
  }
}
