// API endpoint for git deployment
// POST /api/deploy
// Requires: ADMIN_PASSWORD in environment

import type { APIRoute } from 'astro';

const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD || 'admin123';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const password = formData.get('password')?.toString();

    if (password !== ADMIN_PASSWORD) {
      return new Response(
        JSON.stringify({ error: 'Invalid password' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { exec } = await import('child_process');

    // Execute git operations
    const gitCommands = [
      'git add -A',
      'git commit -m "Update portfolio from admin panel"',
      'git push origin main'
    ];

    let output = '';

    for (const cmd of gitCommands) {
      output += `$ ${cmd}\n`;
      output += await new Promise<string>((resolve, reject) => {
        exec(cmd, { cwd: process.cwd() }, (error, stdout, stderr) => {
          if (error) {
            reject(new Error(`${error.message}\n${stderr}`));
          } else {
            resolve(stdout || stderr);
          }
        });
      }) + '\n';
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Git push successful! Vercel will auto-deploy.',
        output
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: (error as Error).message
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
