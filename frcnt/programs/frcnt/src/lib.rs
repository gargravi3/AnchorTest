use anchor_lang::prelude::*;

declare_id!("21ydYig5uj46RJ36mbU1aooxvtekcEQbW1MgcYJNEdNi");

#[program]
pub mod frcnt {
    use super::*;

    pub fn my_instruction(ctx: Context<InstructionAccounts>, input_number: u64) -> Result<()> {
        ctx.accounts.data_account.number1 = input_number;
        msg!("Data account created!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InstructionAccounts<'info> {
    #[account(init, payer = user, space = 8 + 8 + 2)]
    pub data_account: Account<'info, AccountStruct>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct AccountStruct {
    number1: u64,
    number2: u16,
}
